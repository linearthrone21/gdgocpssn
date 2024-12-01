import { useState } from 'react';
import Hero from './components/Hero';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { PlusCircle } from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <PlusCircle className="w-5 h-5" />
            Add Project
          </button>
        </div>

        <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
          <ProjectForm onProjectAdded={() => setShowForm(false)} />
        </Modal>

        <ProjectList />
      </div>
    </div>
  );
}

export default App;