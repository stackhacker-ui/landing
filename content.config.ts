import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const linkSchema = z.object({
  label: z.string().nonempty(),
  href: z.string().nonempty(),
  icon: z.string().optional().editor({ input: "icon" }),
  size: z.enum(["xs", "sm", "lg", "xl"]).optional(),
  variant: z.enum(["default", "destructive", "outline", "secondary", "ghost", "link"]).optional(),
  target: z.enum(["_blank", "_self"]).optional(),
});

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "index.yml",
      schema: z.object({
        seo: z.object({ title: z.string(), description: z.string() }).optional(),
        title: z.string().nonempty(),
        description: z.string().nonempty(),
        hero: z.object({ headline: z.string().optional(), links: z.array(linkSchema) }),
        terminal: z.object({ lines: z.array(z.object({ segments: z.array(z.object({ text: z.string(), style: z.string() })) })) }),
        logos: z.object({ title: z.string().nonempty(), items: z.array(z.string()) }),
        features: z.object({ headline: z.string().optional(), title: z.string().nonempty(), description: z.string().nonempty(), items: z.array(z.object({ icon: z.string(), title: z.string().nonempty(), description: z.string().nonempty() })) }),
        metrics: z.object({ headline: z.string().optional(), title: z.string().nonempty(), description: z.string().nonempty(), items: z.array(z.object({ value: z.string().nonempty(), label: z.string().nonempty(), class: z.string().nonempty() })) }),
        cta: z.object({ title: z.string().nonempty(), description: z.string().nonempty(), command: z.string().nonempty(), links: z.array(linkSchema) }),
      }),
    }),
  },
});
