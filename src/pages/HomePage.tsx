import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Book, Search, MessageSquare, Database, Shield, Zap } from 'lucide-react';
import gsap from 'gsap';

const HomePage: React.FC = () => {
  const chatDemoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatDemoRef.current) {
      const messages = chatDemoRef.current.querySelectorAll('.chat-message');
      gsap.fromTo(messages, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 1.5, repeat: -1, repeatDelay: 1 }
      );
    }
  }, []);

  return (
    <div className="space-y-0">
      <Hero />
      <Features />
      <AboutProject />
      <DataSources />
      <ChatDemo chatDemoRef={chatDemoRef} />
      <CallToAction />
    </div>
  );
};

const Hero: React.FC = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark to-dark-lighter">
    <div className="text-center px-4">
      <h1 className="text-6xl font-bold mb-6 gradient-text">Czech Law RAG System</h1>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        Revolutionizing legal research with AI-powered insights into Czech legislature and laws.
      </p>
      <Link
        to="/chat"
        className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors"
      >
        Start Exploring Now
      </Link>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section className="py-24 bg-dark">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <FeatureCard
          icon={<Database size={48} className="text-primary" />}
          title="Comprehensive Database"
          description="Access a vast collection of Czech laws and legal documents, updated in real-time."
        />
        <FeatureCard
          icon={<Search size={48} className="text-secondary" />}
          title="Intelligent Search"
          description="Find relevant legal information quickly and accurately with our advanced AI algorithms."
        />
        <FeatureCard
          icon={<MessageSquare size={48} className="text-green-500" />}
          title="Interactive Chat"
          description="Ask questions and get insights about Czech legislation through our intuitive chat interface."
        />
      </div>
    </div>
  </section>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-dark-lighter p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold mb-4 text-gray-100">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const AboutProject: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-dark-lighter to-dark">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center gradient-text">About the Project</h2>
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-gray-300 mb-6 text-lg">
            The Czech Law RAG System is a cutting-edge legal research tool that leverages the power of Retrieval-Augmented Generation (RAG) to provide unparalleled insights into Czech legislation.
          </p>
          <p className="text-gray-300 mb-6 text-lg">
            Our system combines vast legal databases with advanced AI technology to offer accurate, context-aware responses to complex legal queries.
          </p>
          <p className="text-gray-300 text-lg">
            Whether you're a legal professional, researcher, or citizen seeking to understand Czech laws, our platform offers an intuitive and efficient way to navigate the complexities of the legal system.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <AboutCard icon={<Shield size={32} />} title="Data Security" />
          <AboutCard icon={<Zap size={32} />} title="Real-time Updates" />
          <AboutCard icon={<Book size={32} />} title="Comprehensive Coverage" />
          <AboutCard icon={<MessageSquare size={32} />} title="Expert Support" />
        </div>
      </div>
    </div>
  </section>
);

const AboutCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="bg-dark p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
    <div className="text-primary mb-4">{icon}</div>
    <h4 className="font-semibold text-lg">{title}</h4>
  </div>
);

const DataSources: React.FC = () => (
  <section className="py-24 bg-dark">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center gradient-text">Our Data Sources</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <DataSourceCard
          title="e-Sbírka"
          description="Official electronic collection of laws providing up-to-date legislative texts."
        />
        <DataSourceCard
          title="OpenData.cz"
          description="Open data portal offering various datasets related to Czech legislation and government."
        />
        <DataSourceCard
          title="Supreme Court Decisions"
          description="Comprehensive database of Supreme Court rulings and interpretations."
        />
      </div>
    </div>
  </section>
);

const DataSourceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-dark-lighter p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-primary">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ChatDemo: React.FC<{ chatDemoRef: React.RefObject<HTMLDivElement> }> = ({ chatDemoRef }) => (
  <section className="py-24 bg-gradient-to-br from-dark to-dark-lighter">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-16 text-center gradient-text">See It in Action</h2>
      <div ref={chatDemoRef} className="bg-dark p-8 rounded-xl shadow-2xl max-w-3xl mx-auto">
        <div className="chat-message mb-6">
          <p className="bg-primary text-white p-4 rounded-lg inline-block">What are the recent changes to Czech labor law?</p>
        </div>
        <div className="chat-message mb-6 text-right">
          <p className="bg-secondary text-white p-4 rounded-lg inline-block">Recent changes to Czech labor law include updates to remote work regulations, changes in overtime compensation, and new provisions for parental leave. Would you like more details on a specific aspect?</p>
        </div>
        <div className="chat-message mb-6">
          <p className="bg-primary text-white p-4 rounded-lg inline-block">Can you elaborate on the remote work regulations?</p>
        </div>
        <div className="chat-message text-right">
          <p className="bg-secondary text-white p-4 rounded-lg inline-block">Certainly! The new remote work regulations in Czech labor law now require employers to cover internet and electricity costs for remote workers. They also establish guidelines for work hours and break times in remote settings. Additionally, there are new provisions for ensuring workplace safety in home offices.</p>
        </div>
      </div>
    </div>
  </section>
);

const CallToAction: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-5xl font-bold mb-8">Ready to Transform Your Legal Research?</h2>
      <p className="text-2xl mb-12 max-w-3xl mx-auto">Join thousands of professionals using Czech Law RAG System to stay ahead in the legal field.</p>
      <Link
        to="/chat"
        className="inline-block bg-white text-primary px-12 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
      >
        Start Your Free Trial
      </Link>
    </div>
  </section>
);

export default HomePage;