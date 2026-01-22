const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = 
    SESSION_ID: process.env.SESSION_ID || "danny fx session!H4sIAAAAAAAAA5VU25KiSBD9lYl6xRgFRJCIjlhEBFpQvLCiG/NQQoElV6sKFCf63zewu6f7YXe2l6ciKyPz5Dkn6ycoSkzRHLVA/QkqghvIUHdkbYWACiZ1HCMCeiCCDAIVhJpkXKB+GI7yIcq9Te3cXM07LssFfyCm3efWWeihk8nS9Am89EBVHzMc/qZgUB8uUXHd3m81U/a7ZMAfpmV/r3sSel61Dr4F+blkS5bxxhN46SpCTHCRGNUJ5YjAbI5aD2LyRfhLlG8FFKxm3Cjil/c/gzGbrp4RJ6y4gnPbfl9eu1t3KuT+1+DvPTqghpZETRy5HFWC5VocUa2peclqsXg8zNzz5tLQzHdf4VOcFCiyI1QwzNov817OQ5zvSgWxKmqVYIGz20luhCVatjLbHRM3rfyUm1W84X4NuIdvCOWZy1bhcOxaM9kN9wfBqtLSVPS0vQrPRzELdrYzMz4D98i7V9L/w7s/s0QJZ45tjqvpbn6moXc+z6LJ2Ewl0tgDccAOzUkaH/Pwa/AjJ9Ingnyo+nYxnSlXbK+RwY75sBBi6+xqtjIprO3A4bThB3zIavI7lMMThTpTFvJRGhf9a31b+9TlbYfbynjmblaH/oUk1nQtHx39xoVmeBb69f64Iyzal6v9bhaM+7XMHyZnWYw2rb7b1AFePT0mSlFrR0DlX3qAoARTRiDDZdHFRnIPwKjZoJAg9mAXHA3Xak0j8DKuEFaXoNLy573ucJ5UhM7JzPvz3HOz/U1rr0+gBypShohSFFmYspK0LqIUJogC9a8fPVCgG3vVresmCj0QY0KZX9RVVsLoXdT3SxiGZV2wTVuEendABKiDjzBiDBcJ7WisC0jCE26QfoKMAjWGGUW/BkQERUBlpEa/llYvo453aTLez01zCHogf+iBI6ACQRzKA0UZ8SNREVVe/IN+v3Z1YVV9LxADPZA98sZDXhqLgjgYSAOZ7xK7eA8UsCsGjKJMMPq2jL/5aUf8G+6uTYQYxBkFKtCX2z1zQ91wzFtLqWlqRqLpiQY+5nz3y6sg4/DkzGDViiPK5vtYukBzzafeaIKvYjggvnG63lls4eZuPP1DEaCC53t/OfB9M1v7fnzh8ig07EAkwigtj2kjOYkGpXoahSskW9ctRpc40LGEz9WJ4925vhIPzbNw36bFxFO2IoJwEY4m2lPXLUINDtHnZublmgqbW77NjeDo9gtb7nuTgeHqgk/vvsDNzMTgvKV3PVXFvNld0CoYOyWn6QY3SqEYNndhx637C/tgrS2nlNKLPsTXVyc/Nil7e8Hww2Sdgt1vjNHjQXiT4r8VfUXeOW/w0vtU5O2N+Zc9ncSBvbntLiHjiLPJLQ7mpzQ6TLlkTxfiYs5P7NCVg9uQKDfw8vKjB6oMsrgkOVABLCJSPgxDyrqzsl3E5W+a6ZpvT1eJ3o2eQcq0j/XY4hxRBvMKqLw8GvO8rCjia5ZHysqC9NSxYA61vO683mpVtWGQvW8b0LpP5+7g5W93Z3/7iAcAAA==
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘɪɴᴄᴇ ᴛᴇᴄʜ*",
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘɪɴᴄᴇ ᴛᴇᴄʜ*', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
