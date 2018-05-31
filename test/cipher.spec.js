describe('cipher', () => {
  
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',() => {
      const result  = cipher.encode (33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
      assert.equal(result,"HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('deberia retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offest 33',()  => {
      const result = cipher.encode(33,"abcdefghijklmnopqrstuvwxyz");
      assert.equal(result,"hijklmnopqrstuvwxyzabcdefg"); 
    }); 

    it('deberia retornar " &#!/()?" para " &#!/()?" con offest 33' ,() => {
      const result = cipher.encode(33," &#!/()?");
      assert.equal(result ," &#!/()?");
    });
}); 

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',() => {
      const result = cipher.decode (33,"HIJKLMNOPQRSTUVWXYZABCDEFG");
      assert.equal(result,"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
    });

    it('deberia retornar "abcdefghijklmnopqrstuvwxyz"  para "hijklmnopqrstuvwxyzabcdefg" con offest 33',() => {
      const result = cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg");
      assert.equal(result,"abcdefghijklmnopqrstuvwxyz"); 
    } );

    it('deberia retornar " &#!/()?" para " &#!/()?" con offest 33' ,() => {
      const result = cipher.decode(33," &#!/()?");
      assert.equal(result ," &#!/()?");
    });
  });

  describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado' );

  });

});
