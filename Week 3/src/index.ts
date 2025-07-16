import {Request, Response, Router} from "express"
import {compile} from "morgan"

// initializing router
const router: Router = Router()

// Task 1: Hello world route
router.get("/hello", (req: Request, res: Response) => {
    res.json({ 
        msg: "Hello world!"
    })
})

// Task 2: ID echoing 
router.get("/echo/:id", (req: Request, res: Response) => {
    res.json({
        id: "dog"
    })
})

// Task 3: POST request
router.post("/sum", (req: Request, res: Response) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers) || !numbers.every(n => typeof n === "number")) {
        return res.status(400).json({
            error: "Invalid input(s)."
        })
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    res.json({ sum })
})

// Tasks 4 & 5: Front-end and back-end communication
type TUser = {
    name: string;
    email: string;
}
let users: TUser[] = []
router.post("/users", (req: Request, res: Response) => {
    const { name, email } = req.body || {}
    if (!name || !email) {
        return res.status(400).json({
            error: "Invalid input(s)."
        })
    }
    const newUser: TUser = { name, email }
    users.push(newUser)
    return res.json({message: "User successfully aded"})
})

router.get("/users", (req: Request, res: Response) => {
    return res.status(201).json(users)
})

export default router