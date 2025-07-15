import { FaEnvelope, FaPhone } from 'react-icons/fa'; // Using react-icons for icons

export default function TopBar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '20px',
      padding: '8px 20px',
      backgroundColor: '#f8f8f8',
      fontSize: '14px',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <FaEnvelope /> <a href="mailto:dineshvaishnav8890@gmail.com" style={{ textDecoration: 'none', color: '#333' }}>dineshvaishnav8890@gmail.com</a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <FaPhone /> <a href="tel:+918890577004" style={{ textDecoration: 'none', color: '#333' }}>+91-8890-(577)-004</a>
      </div>
    </div>
  );
}

