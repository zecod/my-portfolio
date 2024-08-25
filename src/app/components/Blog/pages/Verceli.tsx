import { BreadcrumbUrl } from "../components/BreadCrumb";
import { Badge } from "@/components/ui/badge";
import { SyntaxCode } from "../../Experience/Syntax";
import { NavArticle } from "../components/elemnts/NavArticle";
import verceliImg from "@/assets/bg-ver.png";

export const VerceliBlog = () => {
  const code = `<speak>
  <voice name="en-US-Wavenet-D">
    Hello! Welcome to Verceli, where AI meets voice synthesis.
  </voice>
</speak>`;

  return (
    <div className="container">
      <NavArticle />
      <div className="max-w-[900px] m-auto space-y-7">
        <BreadcrumbUrl title="Verceli" />

        <div className="my-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Introducing Verceli: AI-Powered SSML for High-Quality Audio
            Generation
          </h1>
        </div>

        <div className="my-5 flex justify-between items-center">
          <div>
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #AI
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #SSML
            </Badge>{" "}
            <Badge
              variant={"outline"}
              className="rounded-full text-muted-foreground py-1"
            >
              #VoiceSynthesis
            </Badge>
          </div>

          <div className="text-xs flex items-center gap-2">
            <p className="text-gray-500 dark:text-neutral-500">
              August 25, 2024
            </p>
            <span className="text-gray-500 dark:text-neutral-500">·</span>
            <p>
              <span className="text-gray-500 dark:text-neutral-500">
                Written by
              </span>
              <span> Yasine</span>
            </p>
          </div>
        </div>

        <div className="mt-5">
          <img
            src={verceliImg}
            alt="Verceli SSML AI Integration"
            className="rounded-xl border dark:border-none"
          />
        </div>

        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Introduction
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              In today's digital world, the demand for high-quality,
              natural-sounding audio is growing rapidly. Whether for podcasts,
              audiobooks, or interactive voice applications, the ability to
              generate compelling audio content is crucial. Enter Verceli, a
              cutting-edge SaaS application that leverages the power of AI and
              SSML (Speech Synthesis Markup Language) to produce high-quality
              audio, with the flexibility to integrate different voices
              seamlessly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              What is SSML and How Does Verceli Use It?
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              SSML is a powerful language used to control various aspects of
              speech synthesis, such as pronunciation, volume, pitch, and speed.
              By incorporating SSML, Verceli allows users to fine-tune their
              audio output, ensuring that every piece of content sounds exactly
              as intended.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              With Verceli, you can input your SSML code and let the AI engine
              generate the audio output. Whether you're creating dynamic voice
              applications or simply need a clear, natural-sounding voiceover,
              Verceli makes the process simple and efficient.
            </p>
            <SyntaxCode code={code} />
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              The Power of AI in Verceli
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Verceli's AI engine is at the heart of its audio generation
              capabilities. By analyzing the SSML input, the AI can produce
              high-quality speech that matches the desired tone and style. The
              AI is trained on a vast dataset of human speech, enabling it to
              create voices that are not only natural-sounding but also
              expressive and nuanced.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The integration of AI also means that Verceli can learn and adapt
              to specific use cases over time, improving the quality of the
              audio output with continued use. This makes it an ideal solution
              for businesses and creators who require consistent and
              high-quality audio content.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Integrating Different Voices
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              One of Verceli's standout features is the ability to integrate
              multiple voices into a single project. Whether you need a male,
              female, or even a child’s voice, Verceli offers a wide range of
              voice options that can be easily integrated through SSML.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Users can select from a variety of pre-trained voices or even
              upload custom voice models. This flexibility allows for creating
              highly personalized and diverse audio content, suitable for
              various contexts and audiences.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              For example, you might use a calm, soothing voice for a meditation
              app, while a more energetic and dynamic voice could be perfect for
              an interactive learning tool. With Verceli, the possibilities are
              endless.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Use Cases and Applications
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Verceli's AI-powered SSML capabilities open up a wide range of
              applications across various industries. Here are just a few
              examples:
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                Podcasting: Create professional-quality intros, outros, and
                voiceovers with ease.
              </li>
              <li>
                Audiobooks: Generate expressive and engaging narration for your
                stories and books.
              </li>
              <li>
                E-Learning: Provide clear and consistent voice guidance for
                online courses and tutorials.
              </li>
              <li>
                Interactive Voice Applications: Develop responsive and
                natural-sounding virtual assistants or customer service bots.
              </li>
            </ul>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              The versatility of Verceli makes it an essential tool for anyone
              looking to enhance their audio content with high-quality,
              AI-driven voice synthesis.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Conclusion
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Verceli is revolutionizing the way we generate and utilize audio
              content. By combining the precision of SSML with the power of AI,
              Verceli offers a unique and versatile solution for creating
              natural-sounding, high-quality audio. Whether you're a content
              creator, educator, or developer, Verceli empowers you to bring
              your voice projects to life with unmatched clarity and
              expressiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
