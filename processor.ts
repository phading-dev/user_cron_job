import { SERVICE_CLIENT } from "./service_client";
import {
  newDeleteExpiredEmailVerificationTokensRequest,
  newDeleteExpiredPasswordResetTokensRequest,
} from "@phading/user_service_interface/node/client";

export async function process(): Promise<void> {
  await Promise.all([
    SERVICE_CLIENT.send(newDeleteExpiredEmailVerificationTokensRequest({})),
    SERVICE_CLIENT.send(newDeleteExpiredPasswordResetTokensRequest({})),
  ]);
}
