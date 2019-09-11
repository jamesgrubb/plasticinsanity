import colors from "colors.css"

const textSize = (ammount, spaceUnit) => {return (`${ammount * spaceUnit}em`)}

const baseTheme = {
    btnMinWidth: '200px',
    textBaseSize: 1,
    fontSizes: [
        '0.8rem','1rem','1.6rem','2rem','3rem'
    ],
    colors: {
      blue: "#07c",
      tomato: "tomato",
      purple: "purple"
    },
    radii: [0, 2, 4, '100%']
  };

export const theme = {
        ...baseTheme,
        space: [textSize(baseTheme.textBaseSize,0.25),textSize(baseTheme.textBaseSize,0.5),textSize(baseTheme.textBaseSize,0.75),textSize(baseTheme.textBaseSize,1.25),textSize(baseTheme.textBaseSize,2),textSize(baseTheme.textBaseSize,3.25),textSize(baseTheme.textBaseSize,5.25)],
        colors :  {
            primary: colors.gray,
            secondary: colors.blue,
            text: colors.gray,
            
        },
        weights: {
            thin: 300,
            regular: 400,
            bold: 800,
        },
        
        fonts: {
            serif: "CopernicusTrial-Bold, sans-serif",
            sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        },
        media:{
            phone: `@media (max-width: 400px)`,
            phablet: `@media (min-width: 401px)`,
            desktop: `@media (max-width: 1024px)`
        },
        siteWidth: '90%',
        maxWidth: '1200px',


        buttonStyles: {
            primary: { 
              color: colors.white,
              backgroundColor: colors.blue,
            },
            secondary: {
                color: colors.white,
                backgroundColor: colors.green,
            },
            danger: {
                color: colors.white,
                backgroundColor: colors.orange,
                transitionProperty: 'all',
                transitionDuration: '0.3s',             
                '&:hover':{
                    backgroundColor: colors.red
              },
            },
          },
        
        buttonBadge: {
            borderRadius: baseTheme.radii[3]
        },  
          
        buttonSizes: {
            medium: {
              fontSize: baseTheme.fontSizes[0],
              
            },
            large: {
              fontSize: baseTheme.fontSizes[2],
              
            },
          },
          
    }
console.log(theme.space)

