import React, { useState } from 'react';
import './Faqs.css';

const FAQ1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "なぜ日本企業はブルーパロットと共にインドへ進出すべきですか？",
      answer: "ブルーパロットは、専門的な人材採用、インフラサポート、規制遵守を通じて、インドのテックエコシステムへのスムーズな参入を実現します。弊社の総合的な支援により、日本企業は迅速かつ効果的にインド市場での事業展開を行うことができます. "
    },
    {
      question: "ブルーパロットは日本企業向けにどのような人材を提供しますか?",
      answer: "当社は、日本語対応可能なAI、機械学習（ML）、ソフトウェアエンジニアを独自のデータベース アルジュンナ を通じて提供しています。これにより、日本企業の技術革新と成長を強力に支援し、インド市場での競争力を高めます."
    },
    {
      question: "ブルーパロットはインドでのグローバル・キャパビリティ・センター (GCC) 設立をどのように支援しますか? ",
      answer: "ブルーパロットは、GCCの設立に必要なすべてのプロセスを包括的にサポートします。オフィススペースの確保、ITインフラの整備、法規制対応、運営サポートを一括して提供し、スムーズな業務開始を実現します"
    },
    {
      question: "ブルーパロットはどのような規制・コンプライアンス支援を提供しますか?",
      answer: "ブルーパロットは、事業登録、税務コンプライアンス、労働法、データセキュリティなどの分野で、日本企業がインド市場で安心して事業を運営できるよう、全面的なサポートを行います。これにより、複雑な法規制に煩わされることなく、事業の成長に集中できます."
    },
    {
      question: "ブルーパロットは他のコンサルティング企業と何が違いますか? ",
      answer: "一般的なコンサルティング企業とは異なり、ブルーパロットは単なるアドバイザリーにとどまらず、実際の人材採用、インフラ整備、業務運営に至るまで、実践的なサポートを提供します。これにより、日本企業とインドのテックエコシステムを直接つなぎ、確実な市場参入を実現します. "
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">よくある質問  </h1>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="faq-item"
            >
              <button
                className="faq-question-button"
                onClick={() => toggleFAQ(index)}
              >
                <span className="faq-question-text">{faq.question}</span>
                <svg 
                  className={`faq-arrow ${openIndex === index ? 'rotate' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div 
                className={`faq-answer ${openIndex === index ? 'open' : ''}`}
              >
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ1;