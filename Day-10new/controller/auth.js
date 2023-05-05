
async function usreSign(req, res){
    try{
        const user = await User.find();
        return res.status(200).json({
            msg: "fetched successfully",
            data: user,
        });
    } catch(err){
        return res.send("something went wrong")
    }
}