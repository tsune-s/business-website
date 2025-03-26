'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'コンサルティング',
    description: 'ビジネスの課題を分析し、最適なソリューションを提案します。',
    icon: '💡',
  },
  {
    title: 'システム開発',
    description: '最新の技術を活用した、効率的なシステム開発を提供します。',
    icon: '💻',
  },
  {
    title: 'マーケティング',
    description: 'データに基づいた効果的なマーケティング戦略を立案します。',
    icon: '📈',
  },
  {
    title: '人材育成',
    description: '組織の成長を支える人材育成プログラムを提供します。',
    icon: '👥',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            サービス
          </h2>
          <p className="text-xl text-gray-600">
            お客様のビジネスの成長をサポートする多様なサービスを提供しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 