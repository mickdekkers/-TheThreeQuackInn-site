module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFiles: ['./setupTests.ts'],
};
