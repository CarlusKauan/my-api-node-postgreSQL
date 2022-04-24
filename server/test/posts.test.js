const axios = require('axios')

test('Should get posts', async function(){
    const response = await axios({
        url: 'http://localhost:3333/posts',
        method: 'get'
    });
    
    const posts = response.data;
    
    const [firstPost] = posts;

    expect(posts).toHaveLength(5);
    expect(firstPost.id).toBe(1);
    expect(firstPost.nome).toBe("Thor")
});