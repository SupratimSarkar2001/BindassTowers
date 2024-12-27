import bgImage  from '../asset/bg_login.jpg'
import ocslide  from '../asset/ocslide.jpg'
import propertyslide  from '../asset/propertyslide.jpg'
import renewalslide  from '../asset/renewalslide.jpg'
import taskSlide  from '../asset/taskSlide.jpg'

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

export const slideContentStyleTask={
 margin: 0,
 height: '400px',
 color: '#fff',
 lineHeight: '160px',
 textAlign: 'center',
 backgroundImage: `url(${taskSlide})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 borderRadius: 8,
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
  flexDirection: 'column'
}

export const slideContentStyleProperty={
 margin: 0,
 height: '400px',
 color: '#fff',
 lineHeight: '160px',
 textAlign: 'center',
 backgroundImage: `url(${propertyslide})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 borderRadius: 8,
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'column'
}

export const slideContentStyleOC={
 margin: 0,
 height: '400px',
 color: '#fff',
 lineHeight: '160px',
 textAlign: 'center',
 backgroundImage: `url(${ocslide})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 borderRadius: 8,
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'column'
}

export const slideContentStyleRenewal={
 margin: 0,
 height: '400px',
 color: '#fff',
 lineHeight: '160px',
 textAlign: 'center',
 backgroundImage: `url(${renewalslide})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 borderRadius: 8,
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 flexDirection: 'column'
}

export const slideContentText={
 color: '#fff', 
 fontSize: '24px', 
 textShadow: '0 1px 3px rgba(0,0,0,0.6)' 
}

export const fullPageCardContainer={
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 alignItems: 'center',
 padding: 24,
 background: 'rgba(255, 255, 255, 0.9)',
 borderRadius: 8,
 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
}