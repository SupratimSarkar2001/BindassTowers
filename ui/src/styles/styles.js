import bgImage  from '../asset/bg_login.jpg'
export const fullPageBackgroundFlex={
 height: '100vh',
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 backgroundImage: `url(${bgImage})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
}

export const cardContainer={
 maxWidth: '350px',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 padding: 24,
 background: 'rgba(255, 255, 255, 0.9)',
 borderRadius: 8,
 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
}