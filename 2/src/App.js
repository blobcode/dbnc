import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <form className="container">
          <div className="box">
            <label className="label">Your full given name: </label>
            <input type="text" className="inputl"></input>
          </div>
          <div className="sameline">
            <div className="small">
              <label className="label">Date of Birth</label>
              <div className="inner-lef">
                <input type="text" className="inputs1"></input>
                <img
                  role="img"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNTA5LjcgMjY3LjI4aC0zOC4xMjVjLTQuNTc0MiAwLTguMjg5MSAzLjcxMDktOC4yODkxIDguMjg5MXMzLjcxMDkgOC4yODkxIDguMjg5MSA4LjI4OTFoMzguMTI1YzQuNTcwMyAwIDguMjg5MSAzLjcxODggOC4yODkxIDguMjg5MXY1MS42NTJoLTI4My45OXYtNTEuNjU2YzAtNC41NzAzIDMuNzE4OC04LjI4OTEgOC4yODkxLTguMjg5MWg0My42NTZjNC41NzgxIDAgOC4yODkxLTMuNzA3IDguMjg5MS04LjI4OTEgMC00LjU3NDItMy43MDctOC4yODkxLTguMjg5MS04LjI4OTFoLTQzLjY1NmMtMTMuNzExIDAtMjQuODYzIDExLjE1Mi0yNC44NjMgMjQuODYzdjIyNC41OWMwIDEzLjcxMSAxMS4xNTIgMjQuODYzIDI0Ljg2MyAyNC44NjNoMjY3LjQyYzEzLjcxNSAwIDI0Ljg2My0xMS4xNTIgMjQuODYzLTI0Ljg2M2wtMC4wMDM5MDctMjI0LjU5Yy0wLjAwMzkwNi0xMy43MTEtMTEuMTUyLTI0Ljg2My0yNC44NjctMjQuODYzem04LjI4OTEgMjQ5LjQ2YzAgNC41NzAzLTMuNzE4OCA4LjI4OTEtOC4yODkxIDguMjg5MWgtMjY3LjQxYy00LjU3MDMgMC04LjI4OTEtMy43MTg4LTguMjg5MS04LjI4OTFsMC4wMDM5MDYtMTU2LjM2aDI4My45OXYxNTYuMzZ6bS0xNzUuNy0yMzIuODhoNjYuMzAxYzQuNTc4MSAwIDguMjg5MS0zLjcwNyA4LjI4OTEtOC4yODkxIDAtNC41NzQyLTMuNzA3LTguMjg5MS04LjI4OTEtOC4yODkxaC02Ni4zMDFjLTQuNTc0MiAwLTguMjg5MSAzLjcxMDktOC4yODkxIDguMjg5MSAwIDQuNTgyIDMuNzE0OCA4LjI4OTEgOC4yODkxIDguMjg5MXptLTI5Ljg3NSA0NC43ODFjOS40NjA5IDAgMTcuMTY0LTcuNjk1MyAxNy4xNjQtMTcuMTU2IDAtNi40Mzc1LTMuNjA5NC0xMS45OTYtOC44NzUtMTQuOTM0di00OS40MzhjMC00LjU3ODEtMy43MDctOC4yODkxLTguMjg5MS04LjI4OTEtNC41NzQyIDAtOC4yODkxIDMuNzA3LTguMjg5MSA4LjI4OTF2NDkuNDM4Yy01LjI2MTcgMi45Mzc1LTguODcxMSA4LjQ5MjItOC44NzExIDE0LjkzNCAwLjAwMzkwNiA5LjQ2MDkgNy43MDMxIDE3LjE1NiAxNy4xNiAxNy4xNTZ6bTEyNy4xNSAwYzkuNDYwOSAwIDE3LjE1Ni03LjY5NTMgMTcuMTU2LTE3LjE1NiAwLTYuNDM3NS0zLjYwOTQtMTEuOTk2LTguODcxMS0xNC45MzRsMC4wMDM5MDYtNDkuNDM4YzAtNC41NzgxLTMuNzA3LTguMjg5MS04LjI4OTEtOC4yODkxLTQuNTc4MSAwLTguMjg5MSAzLjcwNy04LjI4OTEgOC4yODkxdjQ5LjQzOGMtNS4yNjE3IDIuOTM3NS04Ljg3MTEgOC40OTIyLTguODcxMSAxNC45MzQgMC4wMDM5MDcgOS40NjA5IDcuNzAzMSAxNy4xNTYgMTcuMTYgMTcuMTU2eiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K"
                />
              </div>
            </div>
            <div className="small">
              <label className="labelnp">
                Country of residence or citizenship:
              </label>
              <input type="text" className="inputs"></input>
            </div>
          </div>
          <div className="box">
            <label className="label">What school do you plan to attend?</label>
            <input type="text" className="inputl"></input>
          </div>
          <div className="box">
            <label className="label">
              Please take a moment to describe your intended are of study:
            </label>
            <textarea
              type="text"
              className="inputxl"
              placeholder="Enter details here"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
