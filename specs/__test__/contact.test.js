var validateInput = require('../../client/src/views/homepage/validateInput.js') ;

describe('contact us form', ()=> {
  test('returns true if message is not empty', ()=> {
    const output1 = validateInput({from_name:'Himanshu',from_email:'test@tamu.edu', message:"hello from the other side"}) ;

    expect(output1).toEqual(true) ;
  });

  test('returns false when the message body is empty', ()=> {
    const output2 = validateInput({from_name:'Himanshu',from_email:'test@tamu.edu', message:""}) ;

    expect(output2).toEqual(false) ;
  })

})
