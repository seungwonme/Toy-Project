import json
from flask import Flask, render_template, request
from openai import OpenAI
from dotenv import dotenv_values

config = dotenv_values(".env")
client = OpenAI(api_key=config["OPENAI_API_KEY"])

app = Flask(
    __name__,
    template_folder="templates",
    static_url_path="",
    static_folder="static",
)


def get_colors(msg):
    response = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": f"""
                ### Instructions ###
                As a color palette generator, your role is to respond to text prompts for color palettes. 
                Your task is to create palettes that match the theme, mood or instructions in the prompt. 
                Each palette should consist of 2 to 8 colors. 
                Consider colors to be 'similar' if the difference between the values of R, G and B is 30 or less. 
                For each set of 'similar colors', output only the one that best fits the prompt.
                The hexadecimal color codes should be written using 6 characters instead of being shortened to 3 characters and in uppercase, not lowercase.
                
                Q: Convert the following verbal description of a color palette into a list of colors: The Mediterranean Sea 
                A: ["#006699", "#66CCCC", "#FOE68C", "#008000", "#F08080"]

                Q: Convert the following verbal description of a color palette into a list of colors: sage, nature, and earth
                A: ["EDF1D6", "#9DC08B", "#609966", "#40513B"]

                Desired Format: A JSON array of hexadecimal color codes

                Q: Convert the following verbal description of a color palette into a list of colors: {msg}
                A:
                """,
            }
        ],
        model="gpt-3.5-turbo",
        max_tokens=100,  # the maximum number of tokens to generate
    )

    colors = json.loads(response.choices[0].message.content)
    return colors


@app.route("/palette", methods=["POST"])
def prompt_to_palette():
    # OPEN AI COMPLETION CALL
    query = request.form.get("query")
    colors = get_colors(query)
    app.logger.info(query)
    app.logger.info(colors)
    # RETURN LIST OF COLORS
    return {"colors": colors}


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
