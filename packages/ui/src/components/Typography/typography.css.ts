import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../styles';

const common = style([
  sprinkles({
    color: 'default',
  }),
  {
    margin: 0,
  },
]);

/**
 * Typography Heading
 */
export const headingStyles = recipe({
  base: [
    common,
    sprinkles({
      letterSpacing: '-2%',
    }),
  ],
  variants: {
    level: {
      1: sprinkles({
        fontSize: '24px',
        lineHeight: '32px',
      }),
      2: sprinkles({
        fontSize: '20px',
        lineHeight: '28px',
      }),
      3: sprinkles({
        fontSize: '18px',
        lineHeight: '26px',
      }),
      4: sprinkles({
        fontSize: '16px',
        letterSpacing: '-1%',
        lineHeight: '24px',
      }),
    },
    strong: {
      true: sprinkles({
        fontWeight: '700',
      }),
      false: sprinkles({
        fontWeight: '500',
      }),
    },
  },
  compoundVariants: [
    {
      variants: {
        level: 4,
        strong: false,
      },
      style: sprinkles({
        fontWeight: '600',
      }),
    },
  ],
});

/**
 * Typography Text
 */
export const TextStyles = recipe({
  base: style([
    common,
    sprinkles({
      fontSize: '16px',
      lineHeight: '26px',
      letterSpacing: '-1%',
    }),
  ]),
  variants: {
    level: {
      1: sprinkles({
        fontWeight: '600',
      }),
      2: sprinkles({
        fontWeight: '500',
      }),
      3: sprinkles({
        fontWeight: '500',
        lineHeight: '28px',
      }),
    },
    inline: {
      true: sprinkles({
        display: 'inline-block',
      }),
    },
  },
});

/**
 * Typography Caption
 */
export const CaptionStyles = recipe({
  base: style([
    common,
    sprinkles({
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '-1%',
    }),
  ]),
  variants: {
    level: {
      1: sprinkles({
        fontWeight: '600',
      }),
      2: sprinkles({
        fontWeight: '500',
      }),
      3: sprinkles({
        fontWeight: '400',
      }),
      4: sprinkles({
        fontWeight: '500',
        letterSpacing: '-4%',
      }),
    },
    inline: {
      true: sprinkles({
        display: 'inline-block',
      }),
    },
  },
});

/**
 * Typography Foot
 */
export const FootStyles = recipe({
  base: style([
    common,
    sprinkles({
      fontSize: '12px',
      lineHeight: '20px',
      letterSpacing: '-1%',
    }),
  ]),
  variants: {
    level: {
      1: sprinkles({
        fontWeight: '600',
      }),
      2: sprinkles({
        fontWeight: '500',
      }),
      3: sprinkles({
        fontSize: '10px',
        fontWeight: '500',
        lineHeight: '16px',
        letterSpacing: '-2%',
      }),
    },
  },
});
