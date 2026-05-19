/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = "金";
function getBooksList() {
  axios({
    url: "http://hmajax.itheima.net/api/books",
    params: {
      creator,
    },
  }).then((res) => {
    console.log(res);
    const bookStr = res.data.data;
    const htmlStr = bookStr
      .map((ele, index) => {
        return `<tr>
          <td>${index + 1}</td>
          <td>${ele.bookname}</td>
          <td>${ele.author}</td>
          <td>${ele.publisher}</td>
          
          <td data-id=${ele.id}>
            <span class="del">删除</span>
            <span class="edit">编辑</span>
          </td>
        </tr>`;
      })
      .join("");
    document.querySelector(".list").innerHTML = htmlStr;
  });
}

getBooksList();

const addBtnDom = document.querySelector(".add-modal");
const addBtn = new bootstrap.Modal(addBtnDom);

document.querySelector(".add-btn").addEventListener("click", () => {
  const addForm = document.querySelector(".add-form");
  const form = serialize(addForm, { hash: true, empty: true });
  axios({
    url: "http://hmajax.itheima.net/api/books",
    method: "POST",
    data: {
      ...form,
      creator,
    },
  }).then((res) => {
    console.log(res);
    getBooksList();
    addForm.reset();
    addBtn.hide();
  });
});

document.querySelector(".list").addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    const theId = e.target.parentNode.dataset.id;
    console.log(theId);

    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
      method: "DELETE",
    }).then(() => {
      getBooksList();
    });
  }
});

const editBtnDom = document.querySelector(".edit-modal");
const editBtn = new bootstrap.Modal(editBtnDom);

document.querySelector(".list").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    const theId = e.target.parentNode.dataset.id;
    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
    }).then((res) => {
      const bookObj = res.data.data;
      const Obj = Object.keys(bookObj);
      Obj.forEach((element) => {
        document.querySelector(`.edit-form .${element}`).value =
          bookObj[element];
      });
    });
    editBtn.show();
  }
});

document.querySelector(".edit-btn").addEventListener("click", () => {
  const editForm = document.querySelector(".edit-form");
  const { id, bookname, author, publisher } = serialize(addForm, {
    hash: true,
    empty: true,
  });
  axios({
    url: `http://hmajax.itheima.net/api/books/${theId}`,
    method: "PUT",
    data: {
      id,
      bookname,
      author,
      pblisher,
    },
  }).then(() => {
    getBooksList();
    editBtn.hide();
  });
});
