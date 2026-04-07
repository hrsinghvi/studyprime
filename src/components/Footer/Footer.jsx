export default function Footer() {
  return (
    <footer style={{
      background: '#262731',
      borderTop: '1px solid rgba(122,125,133,0.3)',
      padding: '32px 40px',
      color: '#7a7d85',
      textAlign: 'center'
    }}>
      <p>© {new Date().getFullYear()} Study Prime. All rights reserved.</p>
    </footer>
  )
}
