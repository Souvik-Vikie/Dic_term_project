import { writeFile } from 'fs/promises';
import { faker } from '@faker-js/faker'; // Importing faker for ES modules

// Define the number of records
const recordCount = 200;

// Function to generate mock data based on schema
const generateMockData = () => {
    const data = [];
    
    for (let i = 0; i < recordCount; i++) {
        data.push({
            end_year: faker.number.int({ min: 2025, max: 2035 }),
            intensity: faker.number.int({ min: 1, max: 10 }),
            sector: faker.commerce.department(),
            topic: faker.lorem.word(),
            insight: faker.lorem.sentence(),
            url: faker.internet.url(),
            region: faker.location.country(),
            start_year: faker.number.int({ min: 2020, max: 2025 }),
            impact: faker.lorem.word(),
            added: faker.date.past().toISOString(),
            published: faker.date.past().toISOString(),
            country: faker.location.country(),
            relevance: faker.number.int({ min: 1, max: 10 }),
            pestle: faker.lorem.word(),
            source: faker.company.name(),
            title: faker.lorem.sentence(),
            likelihood: faker.number.int({ min: 1, max: 10 })
        });
    }
    return data;
};

// Generate data and save it as JSON file
const mockData = generateMockData();

const saveDataToFile = async () => {
    try {
        await writeFile('mockData.json', JSON.stringify(mockData, null, 2));
        console.log("Mock data file created successfully as mockData.json");
    } catch (error) {
        console.error("Error writing file", error);
    }
};

saveDataToFile();