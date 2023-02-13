import Image from "next/image"
import Head from "next/head"
import Layout from "@/components/Layout"
import DemoCode from "@/components/DemoCode"
import RedesignDemo from "@/components/RedesignDemo"

const Proudest = () => {
  return (
    <Layout>
      <div className="p-3 pb-5">
        <Head>
          <title>Code I'm proud of</title>
        </Head>
        <div className="max-w-[70ch] leading-relaxed m-auto text-slate-700">
          <h1 className="text-3xl mb-4 font-semibold">Code I'm proud of:</h1>
          <p className="mb-4">
            This was hard to narrow down, because I'm generally proud of:
            whatever my coworkers give me a pat on the back for (and who doesn't
            love a good "atta boy!"), or when I overcome some technical
            challenge (which to be fair usually just means chasing down some
            stupid bug, or finding some workaround for a package that became
            incompatible after an update).
          </p>
          <p className="mb-4 ">
            In other words, anyone not familiar with the problem or journey is
            unlikely to find some code snippet or other impressive without the
            context. Having said that, I do have something I'm proud of that I
            can show; where my solution was well received and where the context
            can be communicate easily enough...
          </p>
          <h2 className="text-2xl mb-5 mt-10 font-bold">The Context</h2>
          <p className="mb-6">
            My task was to redo components that made up various web crawler
            setup pages that the end user interacted with. This was for a
            company that creates web scrapers that extract data from various
            social media sites.
          </p>
          <figure>
            <div className="rounded-md drop-shadow-md p-3 bg-white m-auto mb-1">
              <Image
                src="/old design.png"
                alt="original design"
                width={893}
                height={577}
                priority
              />
            </div>
            <figcaption className="text-center italic opacity-50 block mb-6">
              Old Outreach Section
            </figcaption>
          </figure>
          <p className="mb-4">
            For each new crawler added to their library a dev has to create the
            settings page for the end-user. My objective was to bring a cleaner
            aesthetic to the settings pages with new components that the devs
            could use to quickly build settings pages for new crawlers and
            integrations.
          </p>
          <h2 className="text-2xl mb-5 mt-10 font-bold">The Solution</h2>
          <p className="mb-6">
            I've done several things to improve the user experience and help
            reduce the high first-time user churn, but the custom range slider
            is what I'm most proud of:
          </p>
          <figure>
            <div className="bg-white p-3 pb-6 mb-1 rounded-md drop-shadow-md">
              <RedesignDemo />
              <br />
            </div>
            <figcaption className="text-center  italic opacity-50 block mb-8 leading-tight">
              Redesigned Outreach Section with range slider that changes maximum
              value based on the selected send schedule.
            </figcaption>
          </figure>

          <DemoCode />

          <h2 className="text-2xl mb-5 mt-10 font-bold">Why I'm proud of it</h2>
          <p className="mb-4">
            Well first, it was surprisingly difficult to style the native range
            slider, so overcoming that hurdle made me proud of my work 🔥.
          </p>
          <p className="mb-4">
            Then then range input itself was well-received, because there were
            many unintuitive rectangular number inputs that this new component
            could now replace.
          </p>

          <p className="">
            I made it flexible, so devs could use a color variant to suggest to
            users which settings they should avoid tweaking, and which they are
            encouraged to change. Size variants, the input encourages the user
            to provide a small or a large number (and use up them usage-credits,
            baby!).
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Proudest
