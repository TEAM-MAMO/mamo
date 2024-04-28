import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles";

export const datePicker = style({});

globalStyle(`${datePicker} *`, {
  fontFamily: "pretendard",
});

globalStyle(".react-calendar", {
  padding: 13,
  border: 0,
  borderRadius: vars.radius.large,
  backgroundColor: vars.color.background.default,
  boxShadow: "0px 4px 30px 0px #0000001A",
  width: 302,
});

/**
 * Calendar Navigator
 */
globalStyle(`.react-calendar__navigation button:enabled:hover`, {
  background: "transparent",
});
globalStyle(`.react-calendar__navigation button:enabled:focus`, {
  background: "transparent",
});

globalStyle(".react-calendar__navigation__label", {
  fontWeight: vars.fontWeight[700],
  letterSpacing: vars.letterSpacing["-1%"],
  fontSize: vars.fontSize["16px"],
  lineHeight: vars.lineHeight["24px"],
});

globalStyle(".react-calendar__navigation", {
  paddingLeft: vars.space["3x"],
  paddingRight: vars.space["3x"],
  alignItems: "center",
  height: vars.sizes["40px"],
});

globalStyle(
  ".react-calendar__navigation button.react-calendar__navigation__arrow",
  {
    fontSize: vars.fontSize["16px"],
    minWidth: 18,
    height: 18,
    color: vars.pallette.gray400,
  },
);

/**
 * Weekdays
 */
globalStyle(".react-calendar__month-view__weekdays", {
  gap: vars.space["1x"],
  color: vars.pallette.gray600,
  fontWeight: vars.fontWeight[500],
  marginBottom: vars.space["6x"],
});
globalStyle(".react-calendar__month-view__weekdays__weekday", {
  padding: 0,
  height: vars.sizes["20px"],
  flexBasis: `${vars.sizes["36px"]} !important`,
});
globalStyle(".react-calendar__month-view__weekdays__weekday abbr", {
  textDecoration: "none",
});

/**
 * Days
 */
globalStyle(".react-calendar__month-view__days", {
  gap: vars.space["1x"],
});
globalStyle(".react-calendar__month-view__days__day", {
  padding: 0,
  height: vars.sizes["36px"],
  flexBasis: `${vars.sizes["36px"]}!important`,
  borderRadius: vars.radius.round,
  color: vars.color.text.default,
});
globalStyle(
  ".react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus",
  {
    background: "transparent",
  },
);
// today
globalStyle(".react-calendar__tile--now", {
  color: vars.color.text.inverse,
  background: vars.pallette.primary500,
});
//  today hover, focus
globalStyle(
  ".react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus",
  {
    color: vars.color.text.inverse,
    background: vars.pallette.primary500,
  },
);
// select
globalStyle(".react-calendar__tile--active", {
  color: vars.color.text.default,
  background: vars.pallette.gray100,
});
// select hover, focus
globalStyle(
  ".react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus",
  {
    color: vars.color.text.default,
    background: vars.pallette.gray100,
  },
);