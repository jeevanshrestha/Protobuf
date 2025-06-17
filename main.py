
import google.protobuf.json_format as json_format
import proto.simple_pb2 as simple_pb2
import proto.complex_pb2 as complex_pb2
import proto.enumerations_pb2 as enum_pb2
import proto.oneofs_pb2 as oneofs_pb2
import proto.maps_pb2 as maps_pb2

def simple() -> simple_pb2.Simple:
    return simple_pb2.Simple(
        id=42,
        is_simple=True,
        name="My name",
        sample_lists=[3, 4, 5]
    )

def complex():
    message = complex_pb2.Complex()
    message.dummy_one.id = 42
    message.dummy_one.name = "My Name"
    
    message.dummy_list.add(id=43, name="My Name 2")
    message.dummy_list.add(id=44, name="My Name 3")
    message.dummy_list.add(id=45, name="My Name 4")
    
    message.dummy_map["hello"].id = 46
    message.dummy_map["hello"].name = "Hello Dummy"
    message.dummy_map["world"].id = 47
    message.dummy_map["world"].name = "World Dummy"

    return message


def enum():
    return enum_pb2.Enumeration(
        eye_color=enum_pb2.EYE_COLOR_BLUE,
        # eye_color=1
    )

def oneofs():
    message = oneofs_pb2.Result(message = "a message")
    print(message)

def maps():
    message = maps_pb2.MapExample()
    message.ids["myid"].id =42
    message.ids["myid2"].id =43
    message.ids["myid3"].id =44
    return message

def file(message):
    path = "simple.bin"
    
    print("Write to file")
    print(message)
    with open(path, "wb") as f:
        bytes_as_str = message.SerializeToString()
        f.write(bytes_as_str)
    
    
    print("Read from file")
    with open(path, "rb") as f:
        t= type(message)
        message2 = t().FromString(f.read())
    
    print(message2)    
    
    
def to_json(message):
    return json_format.MessageToJson(message)

def from_json(json_str, type):
    return json_format.Parse(json_str, type())

if __name__ == "__main__":
    print(simple())
    print(complex())
    print(enum())
    oneofs()
    print(maps())
    file(simple())
    
    json_str = to_json(complex())
    print(json_str)
    
    print(from_json(json_str, complex_pb2.Complex))
