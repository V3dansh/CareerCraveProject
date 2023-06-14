const sections = document.querySelectorAll(".section");

let draggingSection = null;
let dragStartIndex = 0;

sections.forEach((section, index) => {
  const barIcon = section.querySelector(".fa-bars");
  barIcon.addEventListener("mousedown", dragStart);
  section.addEventListener("dragend", dragEnd);
  section.addEventListener("dragover", dragOver);
  section.addEventListener("dragenter", dragEnter);
  section.addEventListener("dragleave", dragLeave);
  section.addEventListener("drop", drop);
  section.setAttribute("draggable", true);
  section.setAttribute("data-index", index);
});

function dragStart(e) {
  const barIcon = this;
  if (barIcon.classList.contains("fa-bars")) {
    const section = barIcon.closest(".section");
    draggingSection = section;
    dragStartIndex = Number(section.dataset.index);
    setTimeout(() => {
      section.style.display = "none";
    }, 0);
  }
  e.stopPropagation();
}


function dragEnd() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("dragging", "drag-over");
    section.style.display = "";
  });
  draggingSection = null;
  dragStartIndex = 0;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("drag-over");
}

function dragLeave() {
  this.classList.remove("drag-over");
}

function drop() {
  const dragEndIndex = Number(this.dataset.index);
  swapSections(dragStartIndex, dragEndIndex);
  this.classList.remove("drag-over");
}

function swapSections(startIndex, endIndex) {
  const sections = document.querySelectorAll(".section");
  const startSection = sections[startIndex];
  const endSection = sections[endIndex];

  if (startIndex < endIndex) {
    endSection.insertAdjacentElement("afterend", startSection);
  } else {
    endSection.insertAdjacentElement("beforebegin", startSection);
  }

  sections.forEach((section, index) => {
    section.setAttribute("data-index", index);
  });
}








