"use client"
import React, { useState } from 'react';
import Modal from '@/components/Modal'; // Import your Modal component

function MyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold">Modal Content</h2>
        <p className="mt-2">This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default MyPage;
