module.exports = function() {
  return function( { addComponents, theme } ) {
    const themeColors = theme( 'colors' );
    const componentClasses = {};

    for ( const colorName in themeColors ) {
      if ( typeof themeColors[colorName] === 'string' ) {
        componentClasses[`.hoverline-${colorName}`] = {
          position: 'relative',
          '&:after': {
            position: 'absolute',
            left: '0',
            bottom: theme( 'spacing[-1]' ),
            width: '0',
            height: theme( 'spacing.2' ),
            content: '""',
            background: `var(--${colorName})`,
            transition: theme( 'transitionProperty.width' ) + ' ' + theme( 'transitionDuration.300' ) + ' ' + theme( 'transitionTimingFunction.DEFAULT' ),
          },
          '&:hover': {
            '&:after': {
              width: 'full',
            },
          },
        };
      }
    }

    addComponents( componentClasses );
  };
};
