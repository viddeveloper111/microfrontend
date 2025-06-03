import { registerApplication, start } from "single-spa";

registerApplication({
  name: "app1",
  app: () => System.import("app1"),
activeWhen: [ "/"] 
});

registerApplication({
  name: "app2",
  app: () => System.import("app2"),
activeWhen: ["/about","/products"]     
});

start();
