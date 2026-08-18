---
layout: journal
title: The Energy AI Paradox
tags: [energy, ai]
---

_NOTE: This is not a finalized research paper. Its depth and factual precision will need to be refined. So take everything with a grain of salt._

## Environmental Impacts of AI

A frequent criticism of generative AI is regarding the environmental impact of training and querying the models. They splurge on electricity grids, soak up drinking water, and strain local supplies. Data centers as a whole (of which modern AI is only a subset) have already surpassed using 1.5% of the world's electricity generation, with estimates of <b>global AI electricity consumption at 0.5%</b>. In the realm of the U.S., AI accounts for about <b>2% of national electricity consumption</b>. And in my lovely hometown of Northern Virginia, data centers take up over 25%. [[OurWorldInData](https://ourworldindata.org/how-much-energy-do-data-centers-and-artificial-intelligence-use)]

But like all technologies, the AI optimists argue, the innovation comes first and the optimizations come second. The [IEA](https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary) claims that just in the past couple years, basic queries have gotten so efficient that <b>"if all conventional internet searches were performed with simple AI text queries, it would consume less than... 1% of total data centre consumption today."</b> Which is surprising, given that the general rule of thumb for vague environmentalists has been to avoid using ChatGPT when a simple google search would do (To be fair, I'm not certain if that estimation includes the initial training costs of the models). The problem is that <b>along with the efficiency gains come a larger demand for higher-intensity applications</b>---like video generation or reasoning---which can drastically boost electricity usage (see [Jevons Paradox](https://en.wikipedia.org/wiki/Jevons_paradox)).

I've also recently been seeing arguments that AI can actually _optimize_ the efficiency of the electricity grid and negate these negative effects long term. The [IEA](https://www.iea.org/reports/energy-and-ai/executive-summary) claims that <b>up to 175 GW of transmission capacity could be unlocked _without_ any new lines being built</b>, which is more than the predictions of data center power load by 2030. And in the R&D field, AI seems to be a perfect fit for materials optimization in areas such as solar PV, where only 0.01% of next-gen materials have been tested.

So what's really happening? Is AI bad for the environment or not? Perhaps it's bad in the short term, but better for the long term?

Well, there's a catch. A few catches, really.

The missing nuance lies underneath umbrella terms and misleading implications. All of these claims center around how much <b>electricity</b> is consumed by <b>AI</b>, and therefore how environmentally damaging it is. Once these 2 terms are broken down, they will reveal patterns that constantly distort discussions about AI.

## AI is a Terrible Term

Firstly: AI is a terrible term (as I will probably continue to complain about in the future). Are we talking about our good ol' ChatGPT, video game NPCs, optimization algorithms, Skynet, or video generators? These are all significantly different concepts. It doesn't make sense to argue in support of LLM training in data centers on the basis that an optimization algorithm can improve power lines---it's not like anyone's planning to supercharge them with Grok! This goes the same for materials optimization for solar PV. But what about drug discovery? That's a use case of AI that most people can get behind. Google's AlphaFold achieved a revolutionary 45,000x acceleration in protein structure mapping using "AI" [[BezosEarthFund](https://www.bezosearthfund.org/news-and-insights/from-accidents-to-acceleration-how-ai-is-revolutionizing-materials-d)]. Well, believe it or not, they're not using a fork of Gemini underneath. While it does use a transformer-style neural network, it's very much a separate entity to LLMs.

So, <b>it's crucial to stop using the blanket term "AI" and at the very least draw a distinction between _general-purpose LLMs_ and _specialized machine learning_</b>. One can argue in favor of LLMs, but should not conflate it with algorithms that can actually optimize research and power usage. 

And here's the thing: you can probably guess how much data centers are used to train LLMs compared to specialized machine learning models. I'll give you a hint: LLMs are trained on the entirety of the internet. Self-driving cars or power grid optimizers are not. LLM training operates on a scale multiple orders of magnitude larger than targeted AI. Therefore, most of the electricity going into AI training is _not_ directly assisting with long-term energy reduction. <b>The environmental benefits of specialized machine learning cannot be used to justify the environmental costs of general-purpose LLMs</b>.

## Not All Electricity Is Equal

Using electricity is not inherently bad. In fact, I would consider it good; it allows us to do a lot of cool stuff. The bigger concern is _how_ electricity is produced. If data centers were all powered with solar panels and wind turbines, I doubt there would be as much concern for the environmental impact as there is today. So the implication that electricity usage = environmental damage is not necessarily correct. Rather, <b>the environmental impact of electricity varies by _carbon-intensity_</b>.

But first, quantifying how much electricity LLMs use up is very difficult. I'll divide the electricity usage of LLMs into four stages: _preparation_, _training_, _fine-tuning_, and _inference_.

<div class="blog_image right">
    <img src="https://arxiv.org/html/2509.07218v1/LoadPattern.png">
    <p>Patterns of AI computing load, from <a href="https://arxiv.org/html/2509.07218v1">Arxiv</a>.</p>
</div>

The _preparation_ stage, while not itself consuming significant electricity relative to the lifecycle, can have drastic effects on the efficiency of the training process (reductions of >90%!). Effectively, this stage centers around data acquisition (scraping the entire Internet) and optimizations come from filtering through redundancies or feature selection.

_Training_ is the foundational, power-hungry process of building a model. It's where tens of thousands of GPUs run for days or weeks straight, momentarily burdening the energy grid with the consumption similar to an entire town. It's impossible for us commoners to know the exact energy consumption during model training of the most popular LLMs out there because none of them disclose it (you can imagine why). 

The _fine-tuning_ phase adapts a pre-trained model to tasks typically expected of an LLM through tweaks to the model. 

_Inference_ is what happens every time a query is run, and operates on a much smaller scale of power usage. However, because any given model experiences millions or billions of queries, the impact of inferences stack up to the training. For example, inference takes up 60% of AI energy usage at Google compared to 40% on training. <b>Other estimates place inference at 90% of total lifecycle use</b> [[Arxiv](https://arxiv.org/html/2509.07218v1)]. 

<div class="blog_image">
    <img src="https://ourworldindata.org/cdn-cgi/imagedelivery/qLq-8BTgXU8yG0N6HnOy8g/6e30a807-7a61-448d-79f3-25e38325b800/w=2550">
    <p>from <a href="https://ourworldindata.org/how-much-energy-do-data-centers-and-artificial-intelligence-use">OurWorldInData</a>.</p>
</div>

Given that the majority of AI energy use comes from inference, this chart from [OurWorldInData](https://ourworldindata.org/how-much-energy-do-data-centers-and-artificial-intelligence-use) can be made based off of available estimates for individual queries. Comparatively, these estimates of AI energy usage seem minor compared to other daily activities. 

Remember that quote from the IEA earlier? That if we used simple AI text queries instead of conventional searches we would use less than 1% of data center consumption? This chart shows why: basic queries _are_ very efficient already. <b>So we're left with a very large gap between the energy consumption of basic queries and the total footprint of the AI industry</b>. _That gap_ is exactly where the tech bros and AI movie enthusiasts lie. Reasoning models and video generators can use potentially hundreds of times more energy than simple queries. So you don't have to feel bad about Google automatically suggesting AI responses---but you might want to think twice about vibecoding a new project management SaaS.

Now we come back to the main problem: how this electricity is sourced. Firstly, these data centers require continuous upkeep, which <b>inherently make intermittent renewable energy sources such as solar or wind less viable compared to stable energy sources like coal and gas</b>. The carbon-intensity of electricity used by data centers is 48% higher than the US average. This is one reason why many have clumped together around coal-heavy grids such as Virginia, West Virginia and Pennsylvania. And while there are plans to build more nuclear facilities to substitute fossil fuels, they are unlikely to materialize with enough power to make a substantial difference in the next decade. [[MIT Technology Review](https://www.technologyreview.com/2025/05/20/1116327/ai-energy-usage-climate-footprint-big-tech/)]

The second problem also stems from the clustering of data centers in specific cities: <b>it places a local strain on the energy economy</b>. The 5% of national electricity usage by data centers are not distributed equally throughout the U.S., but are instead drawing from highly localized areas, which can contribute to higher electricity costs from households (although there are several other significant factors involved in this---see [Concrete Logic](https://www.concretelogicpodcast.com/blog/10-reasons-virginia-power-bills-are-going-up-and-data-centers-are-just-one/)).

So, to recap from the electricity standpoint: <b>the electricity used by AI occurs primarily during inference and relies on electricity with 50% more carbon footprint than the national average</b>.

## What This Means

The main takeaways that I've learned from this process are:

- Simple LLM queries _are_ very power efficient, but advanced reasoning models and video generators make up the bulk of power usage.
- General-purpose LLMs require drastically more electricity to train than specialized machine learning.
- Specialized machine learning is what enables drug discovery and power grid optimization innovations, not LLMs.
- The environmental benefits of specialized machine learning cannot be used to justify the environmental costs of LLMs.
- Model inference takes up significantly more lifecycle energy use than training.
- Data centers/AI use electricity that is 50% more carbon-intense.
- Data centers centralize power consumption in highly localized areas.

I'm sure that there are plenty of aspects I haven't yet considered related to energy and AI (and I haven't even touched any of the other environmental or societal impacts), but this has already helped me realize how much misleading information exists just because of unclear terminology.