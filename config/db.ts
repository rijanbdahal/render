let LOCAL = false
let HostName, URI;

if(LOCAL){
    URI = 'mongodb://localhost/contacts';
    HostName = "localhost"
}else{
    URI = 'mongodb+srv://inft2202:inft2202@cluster0.5bgnwwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    HostName = "MongoDB Atlas"
}

export { HostName, URI }
export const SessionSecret = "INFT2202SessionSecret";