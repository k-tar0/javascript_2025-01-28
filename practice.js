const fs = require('fs');
if (!fs.existsSync('./newDir')) {
    fs.mkdir('newDir', (err) => {
    if (err) {
        console.error('Error creating directory:', err);
    } 
    console.log('Directory created successfully');
});
} else {
    fs.rmdir('newDir', (err)=> {
    if (err) {
        console.error('Error removing directory:', err);
    } 
    console.log('Directory removed successfully');
})};
