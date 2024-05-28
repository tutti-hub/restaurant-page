const aboutPage = document.createElement('div');
aboutPage.classList.add('about');

aboutPage.innerHTML = `
                <div class="contacts">
                    <div class=contact>
                        <h2>Call Us</h2>
                        <p>(+34) 622 658 553</p>
                        <p>(+34) 622 658 554</p>
                    </div>

                    <div class=contact>
                        <h2>Email Us</h2>
                        <p>support.restaurant@mail.com</p>
                        <p>manager.restaurant@mail.com</p>
                    </div>

                    <div class="contact">
                        <h2>Find Us</h2>
                        <p>Carrer del Sabor, 42</p>
                        <p>08001 Barcelona, Spain</p>
                    </div>

                    <div class="contact">
                        <h2>When We Sizzle</h2>
                        <p>Monday to Friday: 11:00 - 22:00</p>
                        <p>Saturday & Sunday: 12:00 - 23:00</p>
                    </div>
                </div>`;


export { aboutPage };
