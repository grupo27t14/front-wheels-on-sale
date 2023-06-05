import { z } from "zod";

export const schema = z.object({

});

export type CreateContactData = z.infer<typeof schema>;
