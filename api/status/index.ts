import { NowRequest, NowResponse } from "@now/node";

export default function(req: NowRequest, res: NowResponse) {
  res.status(200).json({ hello: "beautiful world", status: "fine" });
}
