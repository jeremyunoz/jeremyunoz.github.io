import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from public directory
app.use("/public", express.static(path.join(__dirname, "public")));

// Main route
app.get("/", (req, res) => {
   res.render("index", {
      myName: "Jianming Zheng",
      email: "jianmiz1@uci.edu",
      linkedin: "https://www.linkedin.com/in/jianming-zheng-a207aa278/",
      github: "https://github.com/jeremyunoz",
      description:
         "CSE student passionate about full-stack and embedded systems",
      experience: "2+ years Programming Experience",
      education: "B.S. in CSE @ UCI",
      interests: "Love tennis, hiking, LoL, and coding",
      quote: "Good programmers write code that humans can understand - M. Fowler",
      links: [
         { id: "about", name: "About" },
         { id: "experience", name: "Experience" },
         { id: "projects", name: "Projects" },
         { id: "contact", name: "Contact" },
      ],
      frontendSkills: [
         { name: "HTML", level: "Basic" },
         { name: "CSS", level: "Basic" },
         { name: "JavaScript", level: "Basic" },
      ],
      backendSkills: [
         { name: "Python", level: "Intermediate" },
         { name: "C++", level: "Intermediate" },
         { name: "Git", level: "Basic" },
         { name: "GitHub", level: "Basic" },
      ],
      projects: [
         {
            title: "Personal Website",
            image: "/public/assets/personalWeb.png",
            github: "https://github.com/jeremyunoz",
            demo: "https://jeremyunoz.github.io",
         },
      ],
   });
});

app.listen(port, () => {
   console.log(`Server is running at http://localhost:${port}`);
});
