export default function Navbar() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      background: '#262731',
      borderBottom: '1px solid rgba(122,125,133,0.3)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      padding: '0 40px'
    }}>
      <span style={{ color: '#fafbfd', fontWeight: 700 }}>Study Prime</span>
    </header>
  )
}
