import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import { Button } from "@repo/ui/button";
import stylex from "@stylexjs/stylex";
import styles from "./page.module.css";

const s = stylex.create({
  main: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  myHeading: {
    color: "red",
    fontSize: 50,
    fontWeight: 700,
  },
  myPara: {
    color: "white",
    fontSize: 20,
  },
});

export default function Page() {
  return (
    <main className={stylex(s.main)}>
      <div>
        <h1 className={stylex(s.myHeading)}>Stylex Demo</h1>
        <p className={stylex(s.myPara)}>Hey Pushpaje, How are you</p>
      </div>
    </main>
  );
}
