import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'user-service',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: 'user-group' });

export const startKafka = async () => {
  await producer.connect();
  await consumer.connect();
};
