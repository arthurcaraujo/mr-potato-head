import "./Main.css";
import { useTheme } from "./ThemeContext";

export default function Main() {
    const {theme} = useTheme();

    const h1TagDark = {color: "rgb(255, 100, 0)"};
    const h1TagLight = {color: "rgb(255, 32, 0)"};
    const h2TagDark = {color: "rgb(0, 128, 255)"};
    const h2TagLight = {color: "rgb(0, 50, 150)"};

    return (
        <main>
            <h1 style={(theme === "dark") ? h1TagDark : h1TagLight}>
                Mr. Potato Head made out of paper
            </h1>

            <section id="intro">
                <p>
                    Hello, everyone! On this page, I present you a Mister
                    Potato Head made out of paper! It was completely handmade,
                    using easy-to-find items and recycled materials.
                </p>
                <iframe
                    id="video"
                    src="https://www.youtube.com/embed/9R9YnJZdEqo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                >
                </iframe>
            </section>

            <section id="backstory">
                <h2 style={(theme === "dark") ? h2TagDark : h2TagLight}>
                    Backstory
                </h2>
                <p>
                    When I was a kid, I was enthusiastic about Toy Story movies,
                    and Mister Potato Head used to bring me so much joy.
                    He was my favorite character.
                </p>
                <p>
                    At the time I really wanted a replica of him, but due to my
                    family's economic situation, I could not acquire one. So, I
                    sat down and analyzed my possibilities, thinking about what
                    I could do to solve that problem. The solution: I should
                    make my toy! Then, in order to achieve that dream,
                    I performed the following steps:
                </p>
            </section>

            <section id="instructions">
                <h2 style={(theme === "dark") ? h2TagDark : h2TagLight}>
                    Materials used
                </h2>

                <ul id="materials">
                    <li>a balloon</li>
                    <li>a mixture of glue and water</li>
                    <li>a piece of cardboard</li>
                    <li>paint and a paintbrush</li>
                    <li>pieces of old newspapers</li>
                    <li>pieces of paper towel</li>
                    <li>Scotch tape</li>
                    <li>varnish</li>
                </ul>

                <h2 style={(theme === "dark") ? h2TagDark : h2TagLight}>
                    General instructions
                </h2>
                <article>
                    <h3>BODY:</h3>
                    <ul>
                        <li>
                            Using a paintbrush and a mixture of glue and water,
                            I glued several layers of small pieces of old
                            newspapers and paper towels onto a balloon,
                            leaving the spaces of the little holes
                            (where we put the toy pieces) with nothing.
                        </li>
                        <li>
                            After the paper body was dry, I popped
                            the balloon and removed it from the inside
                            through one of the little holes.
                        </li>
                    </ul>
                </article>
                <hr />
                <article>
                    <h3>PIECES:</h3>
                    <ul>
                        <li>
                            First, I drew the body parts on a piece of cardboard
                            in order to have their shapes.
                        </li>
                        <li>
                            For the pieces to be in high relief, I used
                            crumpled newspaper and Scotch tape to mold
                            them onto the cardboard.
                        </li>
                        <li>
                            Then, I glued pieces of paper towels with the
                            mixture of glue and water onto them.
                        </li>
                    </ul>
                </article>
                <hr />
                <article>
                    <h3>CONCLUSION:</h3>
                    <ul>
                        <li>
                            Afterwards, I painted all the pieces and the body.
                        </li>
                        <li>
                            Finally, I applied varnish to give it a shine
                            and more resistance.
                        </li>
                    </ul>
                </article>
            </section>

            <section id="contact">
                <p>
                    Do not hesitate to contact me if you have any
                    questions about this work!
                </p>
                <p>
                    Enter your email address down below so you can
                    receive updates on new creations of mine.
                </p>
                <form>
                    <label htmlFor="email">
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            required
                        />
                    </label>
                    <input id="submit" type="submit" value="Submit" />
                </form>
                <p id="thanks">Thank you very much in advance!</p>
            </section>
        </main>
    )
}