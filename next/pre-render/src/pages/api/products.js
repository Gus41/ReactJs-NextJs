// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function getRandomId(min=1,max=11000){
    return( Math.random() * (max-min) + min )
}

export default function handler(req,res) {
  res.status(200).json(
    [
        {
            id:getRandomId(),name:'pencil'
        },
        {
            id:getRandomId(), name:'book'
        },
        {
            id:getRandomId(),name:'pen'
        },
        {
            id:getRandomId(),name:'backPack'
        }
    ]
  );
}
