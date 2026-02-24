import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <header style={{ 
          borderBottom: '1px solid #e5e7eb', 
          background: 'white', 
          padding: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ 
              height: '36px', 
              width: '36px', 
              background: '#1e40af', 
              borderRadius: '50%' 
            }} />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '16px' }}>ServiPlusUltra</div>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Madrid & Barcelona</div>
            </div>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            fontSize: '14px' 
          }}>
            <a href="/" style={{ color: '#1e40af' }}>Inicio</a>
            <a href="/electricidad" style={{ color: '#1e40af' }}>Electricidad</a>
            <a href="/climatizacion" style={{ color: '#1e40af' }}>Climatizacion</a>
            <a href="/madrid" style={{ color: '#1e40af' }}>Madrid</a>
            <a href="/barcelona" style={{ color: '#1e40af' }}>Barcelona</a>
            <a href="/reparaciones-manitas" style={{ color: '#1e40af' }}>Reparación</a>
            <a href="/urgencias" style={{ color: '#1e40af' }}>Urgencias</a>
          </div>
          
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 'bold', color: '#1e40af' }}>+34 655 099 298</div>
            <a href="tel:+34655099298" style={{
              display: 'inline-block',
              background: '#f97316',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              fontSize: '14px',
              marginTop: '0.25rem',
              textDecoration: 'none'
            }}>
              Llamar ahora
            </a>
          </div>
        </header>

        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
          {children}
        </main>

        <footer style={{ 
          marginTop: '2rem', 
          borderTop: '1px solid #e5e7eb', 
          background: '#111827', 
          color: '#d1d5db', 
          padding: '1.5rem', 
          textAlign: 'center',
          fontSize: '14px'
        }}>
          <div>ServiPlusUltra Solutions S.L. - Servicio a domicilio Madrid y Barcelona</div>
          <div style={{ marginTop: '0.5rem' }}>
            Tel: <a href="tel:+34655099298" style={{ color: '#f97316', fontWeight: 'bold' }}>+34 655 099 298</a>
          </div>
        </footer>
      </body>
    </html>
  )
}
