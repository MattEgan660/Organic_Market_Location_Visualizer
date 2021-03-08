from flask import Flask, render_template, jsonify

# Flask Setup
app = Flask(__name__, template_folder="templates")

#################################################
# Flask Routes
#################################################
@app.route("/")
def home():

    """Serve homepage template."""
    return render_template("index.html")