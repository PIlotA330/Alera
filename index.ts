import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

const diseases = [
  { name: "Ehlers-Danlos Syndrome", symptoms: ["Joint hypermobility", "Skin hyperextensibility", "Chronic pain", "Frequent dislocations", "Easy bruising", "Fatigue", "Digestive issues"] },
  { name: "Fabry Disease", symptoms: ["Pain in hands and feet", "Angiokeratomas", "Decreased sweating", "Corneal opacity", "Gastrointestinal distress", "Hearing loss", "Fatigue"] },
  { name: "Gaucher Disease", symptoms: ["Enlarged liver and spleen", "Bone pain", "Bruising", "Anemia", "Fatigue", "Lung disease", "Neurological issues"] },
  { name: "Marfan Syndrome", symptoms: ["Tall stature", "Long fingers", "Heart valve issues", "Scoliosis", "Joint pain", "Vision problems", "Fatigue"] }
];

const medications = [
  { name: "Gabapentin", dosage: 300, frequencyPerDay: 3, frequencyPerWeek: 7 },
  { name: "Losartan", dosage: 50, frequencyPerDay: 1, frequencyPerWeek: 7 },
  { name: "Enzyme Replacement Therapy", dosage: 1, frequencyPerDay: 0, frequencyPerWeek: 1 },
  { name: "Ibuprofen", dosage: 200, frequencyPerDay: 2, frequencyPerWeek: 7 }
];

async function main() {
  console.log("Seeding database...");

  // Create Diseases
  const createdDiseases = await Promise.all(
    diseases.map(d => prisma.disease.create({ data: { name: d.name } }))
  );

  // Create Users (Patients)
  for (let i = 0; i < 20; i++) {
    const randomDisease = createdDiseases[i % diseases.length];
    const user = await prisma.user.create({
      data: {
        name: `Patient ${i + 1}`,
        username: `patient${i + 1}`,
        email: `patient${i + 1}@example.com`,
        password: "hashedpassword",
        dateSignedUp: new Date(),
        dateLastSignedIn: new Date(),
        gender: i % 2 === 0 ? "Male" : "Female",
        location: "City, Country",
        birthdate: new Date(1990 + (i % 10), i % 12, i % 28 + 1),
        diagnosisDate: new Date(2020, i % 12, i % 28 + 1),
        diseaseIds: [randomDisease.id]
      }
    });

    // Add Symptoms
    await Promise.all(
      diseases[i % diseases.length].symptoms.map(symptom =>
        prisma.symptom.create({
          data: {
            userId: user.id,
            type: symptom,
            severityStr: ["Mild", "Moderate", "Severe"][Math.floor(Math.random() * 3)],
            durationPerDay: Math.floor(Math.random() * 5) + 1,
            trigger: "Unknown",
            timestamp: new Date()
          }
        })
      )
    );

    // Assign Medications
    const randomMedication = medications[i % medications.length];
    await prisma.medication.create({
      data: {
        userid: user.id,
        dosage: randomMedication.dosage,
        frequencyPerDay: randomMedication.frequencyPerDay,
        frequencyPerWeek: randomMedication.frequencyPerWeek
      }
    });

    // Create a Blog Post for Each User
    await prisma.blog.create({
      data: {
        title: `Living with ${randomDisease.name}`,
        user: { connect: { id: user.id } },
        disease: { connect: { id: randomDisease.id } },
        contents: `This is a personal account of how I manage my condition, ${randomDisease.name}. I experience symptoms like ${diseases[i % diseases.length].symptoms.join(", ")}.` ,
        public: true
      }
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
