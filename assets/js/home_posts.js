{
    let createPost = function(){
        let newPostForm = $('#new-post-form');

        newPostForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type: 'post',
                url: '/posts/create',
                data: newPostForm.serialize(),
                success: function(data){
                    let newPost = newPostDom(data.data.post);
                    $('#posts-list-container>ul').prepernd(newPost);
                    deletePost($(' .delete-post-button', newPost));
                },error: function(error){
                    console.log(error.responseText);
                }
            });
        });
    }


    let newPostDom = function(post){
        return $(`<li id="post- ${post._id}">
            
            <small>
                <a class="delete-post-button" href="/post/destory/${post._id}">X</a>
            </small>
            
            ${post.content}
            <br>
            <%= post.id %>
        
            <div class="post-comments">
                
                    <form action="/comments/create"  meathod = "POST">
                        <input type="text" name="content" placeholder="add comment here..." >
                        <input type="hidden" name="post"  value="${post._id}">
                        <input type="submint" value="Add Comment">
                    
                    </form>
        
        
                  
                    <div class="post-comments-list">
                        <ul id="post-comments-${post._id}">
                            
                        </ul>
                    </div>
            </div>
        </li>`);
    }


    //deleting a post
    let deletePost = function(deleteLink){
        $(deleteLink.click(function(e){
            e.preventDefault();

            $.ajax({
                type: 'get',
                url: $(deleteLink).prop('href'),
                success:function(data){
                    $(`#post-${data.post_id}`).remove();
                }, error: function(error){
                    console.log(error.responseText);
                }
            })
        }))
    }



    createPost();
}