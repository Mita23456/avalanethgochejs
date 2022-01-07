import { Buffer } from "buffer/"
import { SubnetAuth } from "src/apis/platformvm"

describe("SubnetAuth", (): void => {
  const address1: Buffer = Buffer.alloc(4)
  const address2: Buffer = Buffer.alloc(4)
  address2.writeUIntBE(0x01, 0, 4)
  const addresses: Buffer[] = [address1, address2]
  const subnetAuth1: SubnetAuth = new SubnetAuth(addresses)
  const subnetAuth2: SubnetAuth = new SubnetAuth()
  console.log(subnetAuth1)

  test("getters", (): void => {
    const typeName: string = subnetAuth1.getTypeName()
    const typeID: number = subnetAuth1.getTypeID()
    const numAddressIndices: number = subnetAuth1.getNumAddressIndices()
    expect(typeName).toBe("SubnetAuth")
    // expect(numAddressIndices).toBe(2)
    expect(typeID).toBe(10)
  })

  test("toBuffer", (): void => {
    const subnetAuth1Buf: Buffer = subnetAuth1.toBuffer()
    subnetAuth2.fromBuffer(subnetAuth1Buf)
    const subnetAuth1Hex: string = subnetAuth1.toBuffer().toString("hex")
    const subnetAuth2Hex: string = subnetAuth2.toBuffer().toString("hex")
    expect(subnetAuth1Hex).toBe(subnetAuth2Hex)
  })
})
