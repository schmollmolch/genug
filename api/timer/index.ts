import { NowRequest, NowResponse } from "@now/node";
import yeast from "yeast";

import { Timer } from "../../types";

export default function(req: NowRequest, res: NowResponse) {
  const id = req.query.id;
  if (!id) {
    res.status(401).send("Unauthorized");
  } else {
    const timer: Timer = {
      id: yeast(),
      remainingSecondsSinceLastStart: 3576,
      started: new Date().toISOString(),
      status: "paused",
      name: "John plays Splatoon"
    };
    res.status(200).json(timer);
  }
}
