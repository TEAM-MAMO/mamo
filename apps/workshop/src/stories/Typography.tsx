import { Typography } from '@repo/ui';

export const TypographyStory = ({ children }: React.PropsWithChildren) => {
  return <Typography>{children}</Typography>;
};

TypographyStory.Heading = Typography.Heading;
TypographyStory.Text = Typography.Text;
TypographyStory.Caption = Typography.Caption;
TypographyStory.Foot = Typography.Foot;
