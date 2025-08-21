import React, { useState } from "react";
import './Faqs.css'

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do i get started?",
      answer: "Simply browse products, add them to your cart, and proceed to checkout to complete your purchase."
    },
    {
      question: "How do I place an order?",
      answer: "Go to your dashboard and click on the 'Orders' tab."
    },
    {
      question: "What are the delivery options and timelines?",
      answer: "You can reach us via email at support@example.com."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, mobile payments, bank transfers, and select e-wallets."
    },
    {
      question: "How long does it take to get a refund?",
      answer: "Refunds are processed within 5–10 business days after we receive your return."
    },
    {
      question: "How do I contact customer support?",
      answer: "Use the in-app chat, email us at trademart@gmail.com, or call our helpline."
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1 className="head">Frequently Asked Questions</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bar"
      />

      {/* FAQ List */}
      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, index) => (
          <div
            className="faaq"
            key={index}
          >
            {/* Question */}
            <div
            className="toggle"
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={{ margin: 0 }}>{faq.question}</h3>
              <span>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            <div
              style={{
                fontFamily: "Helvetica Neue",
                color: "white",
                maxHeight: openIndex === index ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                padding: openIndex === index ? "15px" : "0 15px",
                backgroundColor: "#147be2ff"
              }}
            >
              {openIndex === index && <p style={{ margin: 0 }}>{faq.answer}</p>}
            </div>
          </div>
        ))
      ) : (
        <p className="empty" style={{ textAlign: "center",  color: "#777" }}>
          No FAQs found for your search.
        </p>
      )}
    </div>
  );
};

export default FAQ;
