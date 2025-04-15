import { VALID_LOADERS } from "next/dist/shared/lib/image-config";

function status(request, response) {
  response.status(200).json({ valor: "olá" });
}

export default status;
